/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as Context from "../context"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    model: NexusPrisma<TypeName, 'model'>
    crud: any
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AddressInput: { // input type
    city?: string | null; // String
    isPrimary?: boolean | null; // Boolean
    number?: string | null; // String
    postNumber?: string | null; // String
    state?: string | null; // String
    street?: string | null; // String
  }
  AddressWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  CreateCustomerInput: { // input type
    addresses?: NexusGenInputs['AddressInput'][] | null; // [AddressInput!]
    allowedBankPayments?: boolean | null; // Boolean
    email?: string | null; // String
    identificationNumber?: string | null; // String
    name?: string | null; // String
    note?: string | null; // String
    personName?: string | null; // String
    phone?: string | null; // String
    taxIdentificationNumber?: string | null; // String
  }
  CreateUserInput: { // input type
    email: string; // String!
    name?: string | null; // String
    password: string; // String!
    role?: NexusGenEnums['UserRole'] | null; // UserRole
  }
  OrderInput: { // input type
    customerId?: string | null; // ID
    items: NexusGenInputs['OrderItemInput'][]; // [OrderItemInput!]!
    note?: string | null; // String
    status?: NexusGenEnums['OrderStatus'] | null; // OrderStatus
    totalPrice: number; // Float!
    totalTax: number; // Float!
    urgency?: number | null; // Int
  }
  OrderItemInput: { // input type
    height?: number | null; // Float
    materialId?: string | null; // ID
    name?: string | null; // String
    pieces?: number | null; // Int
    totalPrice: number; // Float!
    totalTax: number; // Float!
    width?: number | null; // Float
  }
  OrderItemWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  OrderItemsOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  UpdateAddressInput: { // input type
    city?: string | null; // String
    id?: string | null; // ID
    isPrimary?: boolean | null; // Boolean
    number?: string | null; // String
    postNumber?: string | null; // String
    state?: string | null; // String
    street?: string | null; // String
  }
  UpdateCustomerInput: { // input type
    addresses?: NexusGenInputs['UpdateAddressInput'][] | null; // [UpdateAddressInput!]
    allowedBankPayments?: boolean | null; // Boolean
    email?: string | null; // String
    id?: string | null; // ID
    identificationNumber?: string | null; // String
    name?: string | null; // String
    note?: string | null; // String
    personName?: string | null; // String
    phone?: string | null; // String
    taxIdentificationNumber?: string | null; // String
  }
  UpdateOrderInput: { // input type
    customerId?: string | null; // ID
    items?: NexusGenInputs['UpdateOrderItemInput'][] | null; // [UpdateOrderItemInput!]
    note?: string | null; // String
    status?: NexusGenEnums['OrderStatus'] | null; // OrderStatus
    totalPrice?: number | null; // Float
    totalTax?: number | null; // Float
    urgency?: number | null; // Int
  }
  UpdateOrderItemInput: { // input type
    height?: number | null; // Float
    id?: string | null; // ID
    materialId: string; // ID!
    name?: string | null; // String
    pieces?: number | null; // Int
    totalPrice: number; // Float!
    totalTax: number; // Float!
    width?: number | null; // Float
  }
  UpdateUserInput: { // input type
    email: string; // String!
    name?: string | null; // String
    password?: string | null; // String
    role?: NexusGenEnums['UserRole'] | null; // UserRole
  }
}

export interface NexusGenEnums {
  OrderByArg: "asc" | "desc"
  OrderStatus: "DONE" | "NEW" | "READY_TO_PRINT" | "TO_BE_SHIPPED" | "WAITING_FOR_CALCULATION" | "WAITING_FOR_PRODUCTION"
  ProductionLogType: "PRINT" | "PRODUCTION"
  SortOrder: "asc" | "desc"
  UserRole: "ADMINISTRATION" | "EXECUTIVE" | "FACTORY"
}

export interface NexusGenRootTypes {
  Address: { // root type
    city?: string | null; // String
    id: string; // String!
    isPrimary: boolean; // Boolean!
    number?: string | null; // String
    postNumber?: string | null; // String
    street?: string | null; // String
  }
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Customer: { // root type
    allowedBankPayments: boolean; // Boolean!
    createdAt: any; // DateTime!
    email?: string | null; // String
    id: string; // String!
    identificationNumber?: string | null; // String
    name?: string | null; // String
    note?: string | null; // String
    personName?: string | null; // String
    phone?: string | null; // String
    taxIdentificationNumber?: string | null; // String
    updatedAt: any; // DateTime!
  }
  CustomerHelperInfo: { // root type
    city?: string | null; // String
    identificationNumber?: string | null; // String
    name?: string | null; // String
    postNumber?: string | null; // String
    street?: string | null; // String
    taxIdentificationNumber?: string | null; // String
  }
  CustomerPaginated: { // root type
    items: NexusGenRootTypes['Customer'][]; // [Customer!]!
    totalCount: number; // Int!
  }
  Material: { // root type
    createdAt: any; // DateTime!
    id: string; // String!
    name: string; // String!
    price: number; // Float!
    updatedAt: any; // DateTime!
  }
  Mutation: {};
  Order: { // root type
    createdAt: any; // DateTime!
    id: string; // String!
    note?: string | null; // String
    number: number; // Int!
    shippedAt?: any | null; // DateTime
    status: string; // String!
    totalPrice: number; // Float!
    totalTax: number; // Float!
    updatedAt: any; // DateTime!
    urgency: number; // Int!
  }
  OrderItem: { // root type
    createdAt: any; // DateTime!
    height?: number | null; // Float
    id: string; // String!
    name?: string | null; // String
    pieces?: number | null; // Int
    totalPrice: number; // Float!
    totalTax: number; // Float!
    updatedAt: any; // DateTime!
    width?: number | null; // Float
  }
  OrderPaginated: { // root type
    items: NexusGenRootTypes['Order'][]; // [Order!]!
    totalCount: number; // Int!
  }
  ProductionLog: { // root type
    action: string; // String!
    createdAt: any; // DateTime!
    id: string; // String!
    pieces: number; // Int!
  }
  Query: {};
  User: { // root type
    email: string; // String!
    id: string; // String!
    name?: string | null; // String
    role: string; // String!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  AddressInput: NexusGenInputs['AddressInput'];
  AddressWhereUniqueInput: NexusGenInputs['AddressWhereUniqueInput'];
  CreateCustomerInput: NexusGenInputs['CreateCustomerInput'];
  CreateUserInput: NexusGenInputs['CreateUserInput'];
  OrderInput: NexusGenInputs['OrderInput'];
  OrderItemInput: NexusGenInputs['OrderItemInput'];
  OrderItemWhereUniqueInput: NexusGenInputs['OrderItemWhereUniqueInput'];
  OrderItemsOrderByInput: NexusGenInputs['OrderItemsOrderByInput'];
  UpdateAddressInput: NexusGenInputs['UpdateAddressInput'];
  UpdateCustomerInput: NexusGenInputs['UpdateCustomerInput'];
  UpdateOrderInput: NexusGenInputs['UpdateOrderInput'];
  UpdateOrderItemInput: NexusGenInputs['UpdateOrderItemInput'];
  UpdateUserInput: NexusGenInputs['UpdateUserInput'];
  OrderByArg: NexusGenEnums['OrderByArg'];
  OrderStatus: NexusGenEnums['OrderStatus'];
  ProductionLogType: NexusGenEnums['ProductionLogType'];
  SortOrder: NexusGenEnums['SortOrder'];
  UserRole: NexusGenEnums['UserRole'];
}

export interface NexusGenFieldTypes {
  Address: { // field return type
    city: string | null; // String
    id: string; // String!
    isPrimary: boolean; // Boolean!
    number: string | null; // String
    postNumber: string | null; // String
    street: string | null; // String
  }
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Customer: { // field return type
    addresses: NexusGenRootTypes['Address'][]; // [Address!]!
    allowedBankPayments: boolean; // Boolean!
    createdAt: any; // DateTime!
    createdBy: NexusGenRootTypes['User']; // User!
    email: string | null; // String
    id: string; // String!
    identificationNumber: string | null; // String
    name: string | null; // String
    note: string | null; // String
    personName: string | null; // String
    phone: string | null; // String
    taxIdentificationNumber: string | null; // String
    updatedAt: any; // DateTime!
  }
  CustomerHelperInfo: { // field return type
    city: string | null; // String
    identificationNumber: string | null; // String
    name: string | null; // String
    postNumber: string | null; // String
    street: string | null; // String
    taxIdentificationNumber: string | null; // String
  }
  CustomerPaginated: { // field return type
    items: NexusGenRootTypes['Customer'][]; // [Customer!]!
    totalCount: number; // Int!
  }
  Material: { // field return type
    createdAt: any; // DateTime!
    createdBy: NexusGenRootTypes['User']; // User!
    id: string; // String!
    name: string; // String!
    price: number; // Float!
    updatedAt: any; // DateTime!
  }
  Mutation: { // field return type
    addProductionLog: NexusGenRootTypes['OrderItem']; // OrderItem!
    addUser: NexusGenRootTypes['User']; // User!
    changePassword: NexusGenRootTypes['User']; // User!
    createCustomer: NexusGenRootTypes['Customer']; // Customer!
    createMaterial: NexusGenRootTypes['Material']; // Material!
    createOrder: NexusGenRootTypes['Order']; // Order!
    deleteCustomer: NexusGenRootTypes['Customer']; // Customer!
    deleteMaterial: NexusGenRootTypes['Material']; // Material!
    deleteOrder: NexusGenRootTypes['Order']; // Order!
    deleteUser: NexusGenRootTypes['User']; // User!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateCustomer: NexusGenRootTypes['Customer']; // Customer!
    updateMaterial: NexusGenRootTypes['Material']; // Material!
    updateOrder: NexusGenRootTypes['Order']; // Order!
    updateOrderNote: NexusGenRootTypes['Order']; // Order!
    updateOrderStatus: NexusGenRootTypes['Order']; // Order!
    updateUser: NexusGenRootTypes['User']; // User!
  }
  Order: { // field return type
    createdAt: any; // DateTime!
    createdBy: NexusGenRootTypes['User']; // User!
    customer: NexusGenRootTypes['Customer'] | null; // Customer
    id: string; // String!
    items: NexusGenRootTypes['OrderItem'][]; // [OrderItem!]!
    note: string | null; // String
    number: number; // Int!
    shippedAt: any | null; // DateTime
    status: string; // String!
    totalPrice: number; // Float!
    totalSize: number; // Float!
    totalTax: number; // Float!
    updatedAt: any; // DateTime!
    urgency: number; // Int!
  }
  OrderItem: { // field return type
    createdAt: any; // DateTime!
    createdBy: NexusGenRootTypes['User']; // User!
    height: number | null; // Float
    id: string; // String!
    material: NexusGenRootTypes['Material'] | null; // Material
    name: string | null; // String
    pieces: number | null; // Int
    printedPieces: number; // Int!
    producedPieces: number; // Int!
    productionLog: NexusGenRootTypes['ProductionLog'][]; // [ProductionLog!]!
    totalPrice: number; // Float!
    totalTax: number; // Float!
    updatedAt: any; // DateTime!
    width: number | null; // Float
  }
  OrderPaginated: { // field return type
    items: NexusGenRootTypes['Order'][]; // [Order!]!
    totalCount: number; // Int!
  }
  ProductionLog: { // field return type
    action: string; // String!
    createdAt: any; // DateTime!
    createdBy: NexusGenRootTypes['User']; // User!
    id: string; // String!
    orderItem: NexusGenRootTypes['OrderItem']; // OrderItem!
    pieces: number; // Int!
  }
  Query: { // field return type
    getAllCustomers: NexusGenRootTypes['CustomerPaginated']; // CustomerPaginated!
    getAllMaterials: NexusGenRootTypes['Material'][]; // [Material!]!
    getAllOrders: NexusGenRootTypes['OrderPaginated']; // OrderPaginated!
    getAllUsers: NexusGenRootTypes['User'][]; // [User!]!
    getCustomer: NexusGenRootTypes['Customer'] | null; // Customer
    getCustomerHelperInfo: NexusGenRootTypes['CustomerHelperInfo']; // CustomerHelperInfo!
    getHighestOrderNumber: number | null; // Int
    getOrder: NexusGenRootTypes['Order'] | null; // Order
    getOrderByNumber: NexusGenRootTypes['Order'] | null; // Order
    me: NexusGenRootTypes['User']; // User!
  }
  User: { // field return type
    email: string; // String!
    id: string; // String!
    name: string | null; // String
    role: string; // String!
  }
}

export interface NexusGenArgTypes {
  Customer: {
    addresses: { // args
      after?: NexusGenInputs['AddressWhereUniqueInput'] | null; // AddressWhereUniqueInput
      before?: NexusGenInputs['AddressWhereUniqueInput'] | null; // AddressWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Mutation: {
    addProductionLog: { // args
      action: NexusGenEnums['ProductionLogType']; // ProductionLogType!
      orderItemId: string; // ID!
      pieces: number; // Int!
    }
    addUser: { // args
      input: NexusGenInputs['CreateUserInput']; // CreateUserInput!
    }
    changePassword: { // args
      newPassword: string; // String!
      oldPassword: string; // String!
    }
    createCustomer: { // args
      input: NexusGenInputs['CreateCustomerInput']; // CreateCustomerInput!
    }
    createMaterial: { // args
      name: string; // String!
      price: number; // Float!
    }
    createOrder: { // args
      input: NexusGenInputs['OrderInput']; // OrderInput!
      number: number; // Int!
    }
    deleteCustomer: { // args
      id: string; // ID!
    }
    deleteMaterial: { // args
      id: string; // ID!
    }
    deleteOrder: { // args
      id: string; // ID!
    }
    deleteUser: { // args
      id: string; // ID!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    updateCustomer: { // args
      input: NexusGenInputs['UpdateCustomerInput']; // UpdateCustomerInput!
    }
    updateMaterial: { // args
      id: string; // ID!
      name?: string | null; // String
      price?: number | null; // Float
    }
    updateOrder: { // args
      id: string; // ID!
      input: NexusGenInputs['UpdateOrderInput']; // UpdateOrderInput!
    }
    updateOrderNote: { // args
      id: string; // ID!
      note?: string | null; // String
    }
    updateOrderStatus: { // args
      id: string; // ID!
      status: NexusGenEnums['OrderStatus']; // OrderStatus!
    }
    updateUser: { // args
      id: string; // ID!
      input: NexusGenInputs['UpdateUserInput']; // UpdateUserInput!
    }
  }
  Order: {
    items: { // args
      after?: NexusGenInputs['OrderItemWhereUniqueInput'] | null; // OrderItemWhereUniqueInput
      before?: NexusGenInputs['OrderItemWhereUniqueInput'] | null; // OrderItemWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['OrderItemsOrderByInput'][] | null; // [OrderItemsOrderByInput!]
    }
  }
  Query: {
    getAllCustomers: { // args
      first?: number | null; // Int
      search?: string | null; // String
      skip?: number | null; // Int
    }
    getAllMaterials: { // args
      deleted?: boolean | null; // Boolean
    }
    getAllOrders: { // args
      customerId?: string | null; // ID
      first?: number | null; // Int
      orderByUrgency?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
      skip?: number | null; // Int
      status?: NexusGenEnums['OrderStatus'] | null; // OrderStatus
    }
    getCustomer: { // args
      id: string; // ID!
    }
    getCustomerHelperInfo: { // args
      partialIdentificationNumber: string; // String!
    }
    getOrder: { // args
      id: string; // ID!
    }
    getOrderByNumber: { // args
      number: number; // Int!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Address" | "AuthPayload" | "Customer" | "CustomerHelperInfo" | "CustomerPaginated" | "Material" | "Mutation" | "Order" | "OrderItem" | "OrderPaginated" | "ProductionLog" | "Query" | "User";

export type NexusGenInputNames = "AddressInput" | "AddressWhereUniqueInput" | "CreateCustomerInput" | "CreateUserInput" | "OrderInput" | "OrderItemInput" | "OrderItemWhereUniqueInput" | "OrderItemsOrderByInput" | "UpdateAddressInput" | "UpdateCustomerInput" | "UpdateOrderInput" | "UpdateOrderItemInput" | "UpdateUserInput";

export type NexusGenEnumNames = "OrderByArg" | "OrderStatus" | "ProductionLogType" | "SortOrder" | "UserRole";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}