USE copycat;

INSERT INTO products(name, description, price, img, createdAt, updatedAt)
VALUES ("Gray Kitty", "Beautiful fluffy gray kitten with blue eyes", 2500.00, "/assets/images/cat_type_01th.jpg", "2020-10-18","2020-10-18" ),
("Orange Kitty", "Gorgeous orange tabby", 2000.00, "/assets/images/cat_type_02th.jpg", "2020-10-18","2020-10-18" ),
("Black Kitty", "Beautiful black kitten. Very friendly.", 2500.00, "/assets/images/cat_type_03th.jpg", "2020-10-18","2020-10-18" ),
("Gray & White", "Beautiful gray and white kitten", 3500.00, "/assets/images/cat_type_04th.jpg", "2020-10-18","2020-10-18" ),
("Light Gray Kitty", "Beautiful gray kitten with blue eyes", 5000.00, "/assets/images/cat_type_05th.jpg", "2020-10-18","2020-10-18" ),
("Orange & White Kitty", "Beautiful orange and white kitten", 7500.00, "/assets/images/cat_type_06th.jpg", "2020-10-18","2020-10-18" );

INSERT INTO reviews (title, body, createdAt, updatedAt, ProductId)
VALUES ("Best Kitty", "Very loving", "2020-10-18", "2020-10-18", 1),
("Cute", "Friendliest cat ever", "2020-10-18", "2020-10-18", 2),
("Not Friendly", "This cat scratches a lot", "2020-10-18", "2020-10-18", 3),
("Love! <3", "Gets along well with my other pets", "2020-10-18", "2020-10-18", 4),
("Kitten!", "Very friendly kitten", "2020-10-18", "2020-10-18", 5),
("Best Kitten", "Very loving", "2020-10-18", "2020-10-18", 6),
("Cats", "Very good. Will be purchasing more", "2020-10-18", "2020-10-18", 1),
("Not the best...", "The kitty grew up and now isn't as cute.", "2020-10-18", "2020-10-18", 2),
("Great cat!", "Very loving and friendly", "2020-10-18", "2020-10-18", 3),
("Love my new cat", "Friendly and outgoing", "2020-10-18", "2020-10-18", 4);