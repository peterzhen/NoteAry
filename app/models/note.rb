# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  body        :text
#  author_id   :integer          not null
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ActiveRecord::Base
  belongs_to :user,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'User'

  belongs_to :notebook,
  primary_key: :id,
  foreign_key: :notebook_id,
  class_name: 'Notebook'

  validates :title, :author_id, :notebook_id, presence: true
end
