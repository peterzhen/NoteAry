# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base
  has_many :notes,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: "Note"

  has_many :notebooks,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: "Notebook"

  attr_reader :password

  after_create :ensure_welcome_note

  after_initialize :ensure_session_token

  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :session_token, :username, uniqueness: true

  has_attached_file :avatar, default_url: "default-avatar.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/


  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user.try(:is_password?, password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def is_password?(unencrypted_password)
    BCrypt::Password.new(self.password_digest).is_password?(unencrypted_password)
  end

  def password=(unencrypted_password)
    if unencrypted_password.present?
      @password = unencrypted_password
      self.password_digest = BCrypt::Password.create(unencrypted_password)
    end
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def ensure_welcome_note
    default_notebook = Notebook.create!( title: "Inbox", description: "", author_id: self.id)

    default_body = "<h1 class=\"ql-align-center\"><span style=\"background-color: rgb(102, 185, 102);\">NoteAry</span> is a web application inspired by Evernote built using <span style=\"background-color: rgb(230, 0, 0);\">Ruby on Rails</span> and <span style=\"background-color: rgb(102, 163, 224);\">React/Redux</span>.</h1><h2><br></h2><h2>Features &amp; Implementation</h2><p><a href=\"https://github.com/peterzhen/NoteAry/blob/master/docs/screens/homepage.png\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(3, 102, 214);\"><img src=\"https://github.com/peterzhen/NoteAry/raw/master/docs/screens/homepage.png\" alt=\"image of homepage\"></a></p><p><br></p><h3><br></h3><h3>Toolbar</h3><p>Everything that can be done to your note is done through the note's toolbar. It can be seen right above the note's show page, between the title and the body. You can add tags, change notebooks, save and delete your note from here.</p><p><a href=\"https://github.com/peterzhen/NoteAry/blob/master/docs/screens/toolbar.png\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(3, 102, 214);\"><img src=\"https://github.com/peterzhen/NoteAry/raw/master/docs/screens/toolbar.png\" alt=\"image of toolbar\"></a></p><p><br></p><h3><br></h3><h3>Notes</h3><p>Notes are all stored on the database and it's fetched when the user is logged in. Note's are all editable and everything is auto-saved on the fly.</p><p>Notes are sorted through last updated and it can be seen live when you edit your notes in NoteAry. All edits are updated on the database side and it's results are pushed back to the client side.</p><p>You can edit the notes in style. All notes allow complex styling which include rich text editing. You can include pictures, hyperlinks and much more. Below is an example with a resume thats formatted, ready to submit to a hungry employer.&nbsp;<a href=\"https://github.com/peterzhen/NoteAry/blob/master/docs/screens/resume.png\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(3, 102, 214);\"><img src=\"https://github.com/peterzhen/NoteAry/raw/master/docs/screens/resume.png\" alt=\"image of resume\"></a></p><p><br></p><p>Pictures can be included to give your notes some flare. There is no need to do anything fancy, just paste it or click on the image icon to upload.</p><p><br></p><p><a href=\"https://github.com/peterzhen/NoteAry/blob/master/docs/screens/pictures.png\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(3, 102, 214);\"><img src=\"https://github.com/peterzhen/NoteAry/raw/master/docs/screens/pictures.png\" alt=\"image of pictures\"></a></p><p><br></p><h3><br></h3><h3>Notebooks</h3><p>Notebooks are a great way to organize your notes so you don't juggle through your notes. All notes are part of a notebook and you when you sign up, you are automatically created a default notebook. Notebooks can be seen when you hit the notebooks icon on the sidebar. This brings up the notebooks drawer which shows all your current notebooks. You can edit, delete and select from this drawer.</p><p><a href=\"https://github.com/peterzhen/NoteAry/blob/master/docs/screens/notebooks.png\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(3, 102, 214);\"><img src=\"https://github.com/peterzhen/NoteAry/raw/master/docs/screens/notebooks.png\" alt=\"image of notebooks drawer\"></a></p><p>When you click on a notebook your note's list is automatically filtered to show only this notebook's notes. When you delete a notebook, all notes that live inside of that notebook get deleted as well. In the note's show page you can always change where your note lives by clicking the drop down and choosing a new notebook home for that note. The notebook's drawer and the note's index will update live. Since everything is done in react, all components update individually, and only when needed.</p><p><br></p><h3><br></h3><h3>Tags</h3><p>Tags might be an even better way to sort through your notes. It's effortless to add a tag to a note. Simply type it in on the note's show page, hit enter and its there. if the tag doesn't already exist, it will create it. If it does exist, it won't do anything. The database is only updated when needed and all components are updated when needed.</p><p>Tags are created with a tags table and a tagging join table in the backend. It links tags to notes, and if you simply want to remove the association, hitting delete just deletes the join.</p><p><a href=\"https://github.com/peterzhen/NoteAry/blob/master/docs/screens/tags.png\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(3, 102, 214);\"><img src=\"https://github.com/peterzhen/NoteAry/raw/master/docs/screens/tags.png\" alt=\"tag screenshot\"></a></p>"

    default_note = Note.create!( title: "Welcome to NoteAry!", body: default_body, author_id: self.id, notebook_id: default_notebook.id)

    readme_tag = Tag.create!(name: "readme")
    how_to_tag = Tag.create!(name: "how to")
    welcome_tag = Tag.create!(name: "how to")

    Tagging.create!(note_id: default_note.id, tag_id: readme_tag.id)
    Tagging.create!(note_id: default_note.id, tag_id: how_to_tag.id)
    Tagging.create!(note_id: default_note.id, tag_id: welcome_tag.id)
  end

end
