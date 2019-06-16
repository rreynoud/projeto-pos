class Product < ActiveRecord::Base
  validates :name, :price, presence: true
  validates :price, numericality: true
end
