Rails.application.routes.draw do
  scope '/api/version1' do
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
    resources :users
  end
end
