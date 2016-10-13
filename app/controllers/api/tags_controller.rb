class Api::TagsController < ApplicationController
  def index
    @tags = []
    current_user.notes.each do |note|
      @tags.concat(note.tags)
    end

    render json: @tags.uniq
  end

  def create
    @tag = Tag.find_or_create_by(name: tag_params[:name])
    @tagging = Tagging.find_or_create_by(note_id: tag_params[:noteId], tag_id: @tag.tag_id)

    render :show
  end

  def show
    @tag = Tag.find(params[:id])
    if @tag
      @tagged_notes = []
      current_user.notes.each do |note|
        @tagged_notes << note if note.taggings.any? { |tagging| tagging.tag_id == @tag.id }
      end
      render json: @tagged_notes
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  private
  def tag_params
    params.require(:tag).permit(:name, :note_id)
  end
end
