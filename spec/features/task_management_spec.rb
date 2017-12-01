require "rails_helper"

RSpec.feature "Task management", type: :feature do
  scenario "creation" do
    task_title = "title"

    visit new_task_path
    fill_in :task_title, with: task_title
    select "General", from: "Category"
    click_button "Create Task"

    expect(page).to(
      have_css("ul.task-attributes", text: task_title)
    )
  end
end
