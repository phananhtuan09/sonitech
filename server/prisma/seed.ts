const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
async function main() {
  await prisma.code.createMany({
    data: [
      {
        codeID: '001',
        codeIdName: '001_PurchasingUnit',
        codeValue: 1,
        codeName: 'Purchasing Unit',
        createUser: '1',
        updateUser: '1',
      },
      {
        codeID: '003',
        codeIdName: '003_DirectDeliveryKbn',
        codeValue: 2,
        codeName: 'Direct Delivery Kbn',
        createUser: '1',
        updateUser: '1',
      },

      {
        codeID: '004',
        codeIdName: '004_Category1',
        codeValue: 3,
        codeName: 'Category 1',
        createUser: '1',
        updateUser: '1',
      },

      {
        codeID: '005',
        codeIdName: '005_Category2',
        codeValue: 4,
        codeName: 'Category 2',
        createUser: '1',
        updateUser: '1',
      },

      {
        codeID: '006',
        codeIdName: '006_Category3',
        codeValue: 5,
        codeName: 'Category 3',
        createUser: '1',
        updateUser: '1',
      },

      {
        codeID: '007',
        codeIdName: '007_ProductType',
        codeValue: 6,
        codeName: 'Product Type',
        createUser: '1',
        updateUser: '1',
      },

      {
        codeID: '008',
        codeIdName: '008_ApprovalAuthority',
        codeValue: 8,
        codeName: 'Product Type',
        createUser: '1',
        updateUser: '1',
      },

      {
        codeID: '009',
        codeIdName: '009_State',
        codeValue: 9,
        codeName: 'State',
        createUser: '1',
        updateUser: '1',
      },

      {
        codeID: '010',
        codeIdName: '010_ShortageFlag',
        codeValue: 10,
        codeName: 'Shortage Flag',
        createUser: '1',
        updateUser: '1',
      },

      {
        codeID: '011',
        codeIdName: '011_ManagementAuthority',
        codeValue: 11,
        codeName: 'Management Authority',
        createUser: '1',
        updateUser: '1',
      },

      {
        codeID: '012',
        codeIdName: '012_ShippingBaseFlag',
        codeValue: 12,
        codeName: 'Shipping Base Flag',
        createUser: '1',
        updateUser: '1',
      },

      {
        codeID: '013',
        codeIdName: '012 Broadcaster Flag',
        codeValue: 13,
        codeName: 'Broadcaster Flag',
        createUser: '1',
        updateUser: '1',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.information.createMany({
    data: [
      {
        content: 'Content_1',
        title: 'Title_1',
        displayOrder: 1,
        displayFlag: 1,
      },
      {
        content: 'Content_2',
        title: 'Title_2',
        displayOrder: 2,
        displayFlag: 0,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.customer.createMany({
    data: [
      {
        customerCode: 'customer_1',
        customerName: 'Customer 1',
        corporationCode: 'corporation_1',
        state: 9,
        createUser: '1',
        updateUser: '1',
      },
      {
        customerCode: 'customer_2',
        customerName: 'Customer 2',
        corporationCode: 'corporation_2',
        state: 1,
        createUser: '1',
        updateUser: '1',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.division.createMany({
    data: [
      {
        divisionCode: 'division_1',
        divisionName: 'Division 1',
        createUser: '1',
        updateUser: '1',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.maker.createMany({
    data: [
      {
        makerCode: 'maker_1',
        makerName: 'Maker 1',
        state: 9,
        createUser: '1',
        updateUser: '1',
      },
      {
        makerCode: 'maker_2',
        makerName: 'Maker 2',
        state: 1,
        createUser: '1',
        updateUser: '1',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.office.createMany({
    data: [
      {
        officeCode: 'office_1',
        officeName: 'Office 1',
        createUser: '1',
        updateUser: '1',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.shippingBase.createMany({
    data: [
      {
        shippingBaseCode: 'shippingBase_1',
        shippingBaseName: 'ShippingBase 1',
        state: 9,
        createUser: '1',
        updateUser: '1',
      },
      {
        shippingBaseCode: 'shippingBase_2',
        shippingBaseName: 'ShippingBase 2',
        state: 1,
        createUser: '1',
        updateUser: '1',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.supplier.createMany({
    data: [
      {
        supplierCode: 'supplier_1',
        supplierName: 'Supplier 1',
        corporationCode: 'corporation_1',
        state: 9,
        createUser: '1',
        updateUser: '1',
      },
      {
        supplierCode: 'supplier_2',
        supplierName: 'Supplier 2',
        corporationCode: 'corporation_2',
        state: 1,
        createUser: '1',
        updateUser: '1',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.user.createMany({
    data: [
      {
        userID: '1',
        userName: 'admin',
        password: bcrypt.hashSync('1234', 10),
        divisionCode: 'division_1',
        officeCode: 'office_1',
        mail: 'admin@gmail.com',
        approvalAuthority: 3,
        managementAuthority: '2',
        shippingBaseFlag: 1,
        shippingBaseCode: 'shippingBase_1',
        broadcasterFlag: 2,
        createUser: '1',
        updateUser: '1',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.productDetail.createMany({
    data: [
      {
        productCode: 'product_1',
        material: '1',
        description: '1',
        keyword: '1',
        specification: '1',
        itemNumber: 1,
        information: '1',
        colorCode: '1',
        width: 1,
        widthUnit: '1',
        stockOrDirect: '1',
        height: 1,
        heightUnit: '1',
        thickness: 1,
        thicknessUnit: '1',
        price: 1,
        capacity: 1,
        capacityUnit: '1',
        appliedFrom: '1',
        mass: 1,
        massUnit: '1',
        itemImage1: '1',
        itemImage2: '1',
        itemImage3: '1',
        itemImage4: '1',
        itemImage5: '1',
        pdf: '1',
        createUser: '1',
        updateUser: '1',
      },
      {
        productCode: 'product_2',
        material: '1',
        description: '1',
        keyword: '1',
        specification: '1',
        itemNumber: 1,
        information: '1',
        colorCode: '1',
        width: 1,
        widthUnit: '1',
        stockOrDirect: '1',
        height: 1,
        heightUnit: '1',
        thickness: 1,
        thicknessUnit: '1',
        price: 1,
        capacity: 1,
        capacityUnit: '1',
        appliedFrom: '1',
        mass: 1,
        massUnit: '1',
        itemImage1: '1',
        itemImage2: '1',
        itemImage3: '1',
        itemImage4: '1',
        itemImage5: '1',
        pdf: '1',
        createUser: '1',
        updateUser: '1',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.product.createMany({
    data: [
      {
        productCode: 'product_1',
        productName: 'Product 1',
        category1: '1',
        category2: '1',
        category3: '1',
        makerCode: 'maker_1',
        partNumber: '1',
        inputNumber: '1',
        inputUnit: 'maker_1',
        standard: '1',
        oldProductCode: '1',
        purchasingUnit: '1',
        shortageFlag: 0,
        remarks: '1',
        productType: '1',
        state: 9,
        createUser: '1',
        updateUser: '1',
      },
      {
        productCode: 'product_2',
        productName: 'Product 2',
        category1: '1',
        category2: '1',
        category3: '1',
        makerCode: 'maker_2',
        partNumber: '1',
        inputNumber: '1',
        inputUnit: 'maker_2',
        standard: '1',
        oldProductCode: '1',
        purchasingUnit: '1',
        shortageFlag: 0,
        remarks: '1',
        productType: '1',
        state: 1,
        createUser: '1',
        updateUser: '1',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.purchasingPrice.createMany({
    data: [
      {
        supplierCode: 'supplier_1',
        productCode: 'product_1',
        customerCode: 'customer_1',
        mansionOrderCode: 'mansionOrder_1',
        startDate: '1',
        unitPrice: '1',
        state: 9,
        createUser: '1',
        updateUser: '1',
      },
      {
        supplierCode: 'supplier_2',
        productCode: 'product_2',
        customerCode: 'customer_2',
        mansionOrderCode: 'mansionOrder_2',
        startDate: '1',
        unitPrice: '1',
        state: 1,
        createUser: '1',
        updateUser: '1',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.salePrice.createMany({
    data: [
      {
        customerCode: 'customer_1',
        productCode: 'product_1',
        mansionOrderCode: 'mansionOrder_1',
        startDate: '1',
        state: 9,
        createUser: '1',
        updateUser: '1',
      },
      {
        customerCode: 'customer_2',
        productCode: 'product_2',
        mansionOrderCode: 'mansionOrder_2',
        startDate: '1',
        state: 1,
        createUser: '1',
        updateUser: '1',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.sale.createMany({
    data: [
      {
        productCode: 'product_1',
        startingDate: '1',
        officeCode: 'office_1',
        supplierCode: 'supplier_1',
        purchasingPrice: '`',
        orderUnit: '1',
        deliveryDay: '1',
        flight: '1',
        directDeliveryKbn: '1',
        shippingBaseCode: 'shippingBase_1',
        salePrice: '1',
        mansionOrderCode: '1',
        minOrderLot: '1',
        remarks: '1',
        customerCode: 'customer_1',
        state: 9,
        createUser: '1',
        updateUser: '1',
      },
      {
        productCode: 'product_2',
        startingDate: '1',
        officeCode: 'office_1',
        supplierCode: 'supplier_1',
        purchasingPrice: '`',
        orderUnit: '1',
        deliveryDay: '1',
        flight: '1',
        directDeliveryKbn: '1',
        shippingBaseCode: 'shippingBase_1',
        salePrice: '1',
        mansionOrderCode: '1',
        minOrderLot: '1',
        remarks: '1',
        customerCode: 'customer_1',
        state: 1,
        createUser: '1',
        updateUser: '1',
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
