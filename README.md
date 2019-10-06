# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|username|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|stiring|null: false|
|message_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :message
- has_many :users_groups
- has_many  :users,  through:  :users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|text
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :groups