export let registration=`CREATE TABLE if not exists registrations(
    user_id int AUTO_increment,
    user_first_name text not null,
    user_last_name text not null,
    user_email varchar(255) not null,
    user_password varchar(255) not null,
    PRIMARY KEY ( user_id)
    )`
export let booktable=`create table if not exists bookTable(
book_id int  AUTO_increment,
  book_link varchar(255) not null,
  book_title text not null,
  book_author text not null,
  book_description text not null,
  primary key(book_id)
)`;