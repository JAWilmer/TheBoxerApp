CREATE DATABASE `boxers` ;

Create TABLE boxers.user(
	    user_ID INT not null auto_increment PRIMARY KEY,
		frequentShopper_ID INT,
        box_ID INT,
        emailAddress varchar(50),
		lastProductViewed_ID INT,
		lastItemInCart_ID INT,
        subscriber TINYINT(1),
		subscriberFrequencyWeeks int,
		lastSubscriptionDate DATE, 
		firstName varchar(50),
		lastName varchar(50),
		address varchar(100),
        city varchar(50),
		state varchar(50),
		zip int,
		phone varchar(20),
		active tinyint(1),
		wishList_ID int,
        pet_ID int,
        optIn tinyint(1),
        lastLogin date
);

Create table boxers.productView(
    productView_ID int not null auto_increment PRIMARY KEY,
    userID int,
    listing_id int,
    dateViewed DATE,
    tags varchar(100),
    ending_tsz  int,
    timesViewed int
);

Create table boxers.product(
    listing_id int not null,
    active tinyint(1),
    title BLOB,
    description BLOB,
    price decimal (20,2),
    currency_code varchar(4),
    quantity int,
    listingURL varchar(255),
    imageURL varchar(255),
    category_ID int,
    shop_section_id int,
    ending_tsz int,
    subscriptionEligible tinyint(1),
    avgReviews varchar(255),
    size varchar(255),
    color varchar(255),
    alias_ID varchar(10),
    boxEligible tinyint(1),
    boxDiscountAmount int,
    markupPercent int
);

create table boxers.pet(
    pet_ID int not null auto_increment PRIMARY KEY,
    petName varchar(255),
    user_ID int,
    lastBox_ID int,
    lastListing_ID int
);
create table boxers.boxes(
    box_ID int not null auto_increment PRIMARY Key,
    user_ID INT,
    pet_ID int,
    items BLOB,
    numberOfItems int,
    averageDiscount decimal(3,2),
    dateShipped date,
    dateOrdered date,
    totalPrice decimal (20,2),
    totalTax decimal (20,2),
    shippingAndFees decimal (20,2)
);
create table boxers.itemsSold(
    itemsSold_ID int not null auto_increment PRIMARY KEY,
    listing_ID int,
    user_ID int,
    box_ID int,
    pet_ID int,
    soldOn_Date Date,
    discounted tinyInt(1),
    salesPrice decimal (20,4),
    retailPrice decimal(20,4),
    inBoxItem tinyInt(1)

);