require "rails_helper"

RSpec.feature "Task management", type: :feature, js: true do
  scenario "creation", :js do
    task_title = "title"

    visit new_task_path
    fill_in :task_title, with: task_title
    select "General", from: "category"
    message = accept_alert do
      click_button "Create Task"
    end

    expect(message).to eq("Task created successfully.")
  end
end
