class Api::TagsController < ApplicationController
  def index
    @tags = []
    current_user.notes.each do |note|
      @tags.concat(note.tags)
    end

    render json: @tags.uniq
  end

  def create

  end

  def show
    @tag = Tag.find(params[:id])

    if @tag
      @tagged_notes = []
      current_user.notes.each do |note|
        @tagged_notes << note if note.tags.any? { |tag| tag.note_id == @tag.id }
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
    params.require(:tag).permit(:name)
  end
end
