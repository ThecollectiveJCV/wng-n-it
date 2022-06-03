Rails.application.routes.draw do
  resources :reviews
  resources :restaurants
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }  
  devise_scope :user do
    root :to => 'devise/sessions#new'
   end
end
