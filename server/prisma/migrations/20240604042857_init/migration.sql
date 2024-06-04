-- CreateTable
CREATE TABLE `m_code` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Code_ID` VARCHAR(255) NULL,
    `Code_IDName` VARCHAR(255) NULL,
    `Code_Value` INTEGER NULL,
    `Code_Name` VARCHAR(255) NULL,
    `Create_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Create_User` VARCHAR(255) NULL,
    `Update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Update_User` VARCHAR(255) NULL,
    `Delete_Flag` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `m_code_Code_ID_key`(`Code_ID`),
    UNIQUE INDEX `m_code_Code_Value_key`(`Code_Value`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_information` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Content` TEXT NULL,
    `Title` VARCHAR(255) NULL,
    `DispOrder` INTEGER NULL,
    `DispFlag` INTEGER NULL,
    `InfoDate` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_customer` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Customer_CD` VARCHAR(255) NULL,
    `Customer_Name` VARCHAR(255) NULL,
    `Corporation_CD` VARCHAR(255) NULL,
    `State` INTEGER NULL,
    `Create_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Create_User` VARCHAR(255) NULL,
    `Update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Update_User` VARCHAR(255) NULL,
    `Delete_Flag` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `m_customer_Customer_CD_key`(`Customer_CD`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_division` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Division_CD` VARCHAR(255) NULL,
    `Division_Name` VARCHAR(255) NULL,
    `Create_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Create_User` VARCHAR(255) NULL,
    `Update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Update_User` VARCHAR(255) NULL,
    `Delete_Flag` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `m_division_Division_CD_key`(`Division_CD`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_maker` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Maker_CD` VARCHAR(255) NULL,
    `Maker_Name` VARCHAR(255) NULL,
    `State` INTEGER NULL,
    `Create_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Create_User` VARCHAR(255) NULL,
    `Update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Update_User` VARCHAR(255) NULL,
    `Delete_Flag` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `m_maker_Maker_CD_key`(`Maker_CD`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_office` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Office_CD` VARCHAR(255) NULL,
    `Office_Name` VARCHAR(255) NULL,
    `Create_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Create_User` VARCHAR(255) NULL,
    `Update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Update_User` VARCHAR(255) NULL,
    `Delete_Flag` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `m_office_Office_CD_key`(`Office_CD`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_shipping_base` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Shipping_Base_CD` VARCHAR(255) NULL,
    `Shipping_Base_Name` VARCHAR(255) NULL,
    `State` INTEGER NULL,
    `Create_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Create_User` VARCHAR(255) NULL,
    `Update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Update_User` VARCHAR(255) NULL,
    `Delete_Flag` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `m_shipping_base_Shipping_Base_CD_key`(`Shipping_Base_CD`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_supplier` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Supplier_CD` VARCHAR(255) NULL,
    `Supplier_Name` VARCHAR(255) NULL,
    `Corporation_CD` VARCHAR(255) NULL,
    `State` INTEGER NULL,
    `Create_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Create_User` VARCHAR(255) NULL,
    `Update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Update_User` VARCHAR(255) NULL,
    `Delete_Flag` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `m_supplier_Supplier_CD_key`(`Supplier_CD`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_user` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `User_ID` VARCHAR(255) NOT NULL,
    `User_Name` VARCHAR(255) NOT NULL,
    `Password` VARCHAR(255) NOT NULL,
    `Division_CD` VARCHAR(255) NULL,
    `Office_CD` VARCHAR(255) NULL,
    `Mail` VARCHAR(255) NULL,
    `Approval_Authority` INTEGER NULL,
    `Management_Authority` VARCHAR(255) NULL,
    `Shipping_Base_Flag` INTEGER NULL,
    `Shipping_Base_CD` VARCHAR(191) NULL,
    `Broadcaster_Flag` INTEGER NULL,
    `Create_User` VARCHAR(255) NULL,
    `Create_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Update_User` VARCHAR(255) NULL,
    `Delete_Flag` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `m_user_User_ID_key`(`User_ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_product_detail` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Product_CD` VARCHAR(255) NULL,
    `Material` VARCHAR(255) NULL,
    `Description` VARCHAR(255) NULL,
    `Keyword` VARCHAR(255) NULL,
    `Specification` VARCHAR(255) NULL,
    `Item_Number` INTEGER NULL,
    `Information` VARCHAR(255) NULL,
    `Color_Code` VARCHAR(255) NULL,
    `width` INTEGER NULL,
    `width_Unit` VARCHAR(255) NULL,
    `Stock_Or_Direct` VARCHAR(255) NULL,
    `Height` INTEGER NULL,
    `Height_Unit` VARCHAR(255) NULL,
    `Thickness` INTEGER NULL,
    `Thickness_Unit` VARCHAR(255) NULL,
    `Price` INTEGER NULL,
    `Capacity` INTEGER NULL,
    `Capacity_Unit` VARCHAR(255) NULL,
    `Applied_From` VARCHAR(255) NULL,
    `Mass` INTEGER NULL,
    `Mass_Unit` VARCHAR(255) NULL,
    `Item_Image_1` VARCHAR(255) NULL,
    `Item_Image_2` VARCHAR(255) NULL,
    `Item_Image_3` VARCHAR(255) NULL,
    `Item_Image_4` VARCHAR(255) NULL,
    `Item_Image_5` VARCHAR(255) NULL,
    `PDF` VARCHAR(255) NULL,
    `Create_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Create_User` VARCHAR(255) NULL,
    `Update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Update_User` VARCHAR(255) NULL,
    `Delete_Flag` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `m_product_detail_Product_CD_key`(`Product_CD`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_product` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Product_CD` VARCHAR(255) NULL,
    `Product_Name` VARCHAR(255) NULL,
    `Category1` VARCHAR(255) NULL,
    `Category2` VARCHAR(255) NULL,
    `Category3` VARCHAR(255) NULL,
    `Maker_CD` VARCHAR(255) NULL,
    `Part_Number` VARCHAR(255) NULL,
    `Input_Number` VARCHAR(255) NULL,
    `Input_Unit` VARCHAR(255) NULL,
    `Standard` VARCHAR(255) NULL,
    `Old_Product_CD` VARCHAR(255) NULL,
    `Purchasing_Unit` VARCHAR(255) NULL,
    `Shortage_Flag` INTEGER NULL,
    `Remarks` VARCHAR(255) NULL,
    `Product_Type` VARCHAR(255) NULL,
    `State` INTEGER NULL,
    `Create_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Create_User` VARCHAR(255) NULL,
    `Update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Update_User` VARCHAR(255) NULL,
    `Delete_Flag` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `m_product_Product_CD_key`(`Product_CD`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_purchasing_price` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Supplier_CD` VARCHAR(255) NULL,
    `Product_CD` VARCHAR(255) NULL,
    `Customer_CD` VARCHAR(255) NULL,
    `Mansion_Order_CD` VARCHAR(255) NULL,
    `Start_Date` VARCHAR(255) NULL,
    `Unit_Price` VARCHAR(255) NULL,
    `State` INTEGER NULL,
    `Create_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Create_User` VARCHAR(255) NULL,
    `Update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Update_User` VARCHAR(255) NULL,
    `Delete_Flag` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_sale_price` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Customer_CD` VARCHAR(255) NULL,
    `Product_CD` VARCHAR(255) NULL,
    `Mansion_Order_CD` VARCHAR(255) NULL,
    `Start_Date` VARCHAR(255) NULL,
    `State` INTEGER NULL,
    `Create_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Create_User` VARCHAR(255) NULL,
    `Update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Update_User` VARCHAR(255) NULL,
    `Delete_Flag` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_sale` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Product_CD` VARCHAR(255) NULL,
    `Starting_Date` VARCHAR(255) NULL,
    `Office_CD` VARCHAR(255) NULL,
    `Supplier_CD` VARCHAR(255) NULL,
    `Purchasing_Price` VARCHAR(255) NULL,
    `Order_Unit` VARCHAR(255) NULL,
    `Delivery_Day` VARCHAR(255) NULL,
    `Flight` VARCHAR(255) NULL,
    `Direct_Delivery_Kbn` VARCHAR(255) NULL,
    `Shipping_Base_CD` VARCHAR(255) NULL,
    `Sale_Price` VARCHAR(255) NULL,
    `Mansion_Order_CD` VARCHAR(255) NULL,
    `Min_Order_Lot` VARCHAR(255) NULL,
    `Remarks` VARCHAR(255) NULL,
    `State` INTEGER NULL,
    `Create_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Create_User` VARCHAR(255) NULL,
    `Update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Update_User` VARCHAR(255) NULL,
    `Delete_Flag` INTEGER NOT NULL DEFAULT 0,
    `Customer_CD` VARCHAR(255) NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `m_customer` ADD CONSTRAINT `m_customer_Create_User_fkey` FOREIGN KEY (`Create_User`) REFERENCES `m_user`(`User_ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_maker` ADD CONSTRAINT `m_maker_Create_User_fkey` FOREIGN KEY (`Create_User`) REFERENCES `m_user`(`User_ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_shipping_base` ADD CONSTRAINT `m_shipping_base_Create_User_fkey` FOREIGN KEY (`Create_User`) REFERENCES `m_user`(`User_ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_supplier` ADD CONSTRAINT `m_supplier_Create_User_fkey` FOREIGN KEY (`Create_User`) REFERENCES `m_user`(`User_ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_user` ADD CONSTRAINT `m_user_Division_CD_fkey` FOREIGN KEY (`Division_CD`) REFERENCES `m_division`(`Division_CD`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_user` ADD CONSTRAINT `m_user_Office_CD_fkey` FOREIGN KEY (`Office_CD`) REFERENCES `m_office`(`Office_CD`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_user` ADD CONSTRAINT `m_user_Shipping_Base_CD_fkey` FOREIGN KEY (`Shipping_Base_CD`) REFERENCES `m_shipping_base`(`Shipping_Base_CD`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_product` ADD CONSTRAINT `m_product_Product_CD_fkey` FOREIGN KEY (`Product_CD`) REFERENCES `m_product_detail`(`Product_CD`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_product` ADD CONSTRAINT `m_product_Input_Unit_fkey` FOREIGN KEY (`Input_Unit`) REFERENCES `m_maker`(`Maker_CD`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_product` ADD CONSTRAINT `m_product_Create_User_fkey` FOREIGN KEY (`Create_User`) REFERENCES `m_user`(`User_ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_product` ADD CONSTRAINT `m_product_State_fkey` FOREIGN KEY (`State`) REFERENCES `m_code`(`Code_Value`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_purchasing_price` ADD CONSTRAINT `m_purchasing_price_Supplier_CD_fkey` FOREIGN KEY (`Supplier_CD`) REFERENCES `m_supplier`(`Supplier_CD`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_purchasing_price` ADD CONSTRAINT `m_purchasing_price_Product_CD_fkey` FOREIGN KEY (`Product_CD`) REFERENCES `m_product`(`Product_CD`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_purchasing_price` ADD CONSTRAINT `m_purchasing_price_Customer_CD_fkey` FOREIGN KEY (`Customer_CD`) REFERENCES `m_customer`(`Customer_CD`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_purchasing_price` ADD CONSTRAINT `m_purchasing_price_Create_User_fkey` FOREIGN KEY (`Create_User`) REFERENCES `m_user`(`User_ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_sale_price` ADD CONSTRAINT `m_sale_price_Customer_CD_fkey` FOREIGN KEY (`Customer_CD`) REFERENCES `m_customer`(`Customer_CD`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_sale_price` ADD CONSTRAINT `m_sale_price_Product_CD_fkey` FOREIGN KEY (`Product_CD`) REFERENCES `m_product`(`Product_CD`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_sale_price` ADD CONSTRAINT `m_sale_price_Create_User_fkey` FOREIGN KEY (`Create_User`) REFERENCES `m_user`(`User_ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_sale` ADD CONSTRAINT `m_sale_Product_CD_fkey` FOREIGN KEY (`Product_CD`) REFERENCES `m_product`(`Product_CD`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_sale` ADD CONSTRAINT `m_sale_Supplier_CD_fkey` FOREIGN KEY (`Supplier_CD`) REFERENCES `m_supplier`(`Supplier_CD`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_sale` ADD CONSTRAINT `m_sale_Customer_CD_fkey` FOREIGN KEY (`Customer_CD`) REFERENCES `m_customer`(`Customer_CD`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_sale` ADD CONSTRAINT `m_sale_Shipping_Base_CD_fkey` FOREIGN KEY (`Shipping_Base_CD`) REFERENCES `m_shipping_base`(`Shipping_Base_CD`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_sale` ADD CONSTRAINT `m_sale_Office_CD_fkey` FOREIGN KEY (`Office_CD`) REFERENCES `m_office`(`Office_CD`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_sale` ADD CONSTRAINT `m_sale_Create_User_fkey` FOREIGN KEY (`Create_User`) REFERENCES `m_user`(`User_ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_sale` ADD CONSTRAINT `m_sale_State_fkey` FOREIGN KEY (`State`) REFERENCES `m_code`(`Code_Value`) ON DELETE SET NULL ON UPDATE CASCADE;
