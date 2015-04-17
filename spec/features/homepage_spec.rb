require 'rails_helper'

describe 'homepage' do

  it 'user can see the app name on the homepage' do
    visit root_path
    expect(page).to have_content 'Netcatz'
  end
end