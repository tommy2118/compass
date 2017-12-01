class Task < ApplicationRecord
  enum category: {
    "General" => 0,
    "Backend" => 1,
    "Front End" => 2,
    "Dev Ops" => 3
  }

  validates_presence_of :title
  validates_presence_of :category
  validates :category, inclusion: categories.keys
end
