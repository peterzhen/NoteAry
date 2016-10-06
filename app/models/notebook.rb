# == Schema Information
#
# Table name: notebooks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author_id   :integer          not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Notebook < ActiveRecord::Base
  belongs_to :user,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'User'

  has_many :notes,
  primary_key: :id,
  foreign_key: :notebook_id,
  class_name: "Note",
  dependent: :destroy

  validates :title, :user presence: true
end
