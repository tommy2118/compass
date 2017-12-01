require 'rails_helper'

RSpec.describe Task, type: :model do
  categories = %w(General Backend Front\ End Dev\ Ops)
  it { is_expected.to validate_presence_of(:title) }
  it { is_expected.to validate_presence_of(:category) }
  it { is_expected.to define_enum_for(:category).with(categories) }
end
