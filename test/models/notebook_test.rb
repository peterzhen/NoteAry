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

require 'test_helper'

class NotebookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
