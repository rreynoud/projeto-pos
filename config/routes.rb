Rails.application.routes.draw do
  root 'home#index'
  resources :products
  resources :lists
end
