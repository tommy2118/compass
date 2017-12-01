FactoryBot.define do
  factory :task do
    title "MyString"
    category 1
    is_core false
    requires_review false
    started_on "2017-12-01"
    completed_on "2017-12-01"
    reviewed_on "2017-12-01"
    references "MyText"
  end
end
