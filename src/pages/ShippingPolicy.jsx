import React from "react";
import HeadingDescription from "../components/common/HeadingDescription";

const ShippingPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-28 py-8">
      <div className="w-3/4">
        <div className="py-2">
          <h1 className="text-3xl pb-8">Shipping and Returns</h1>
          <p className="text-[17px]">
            We want you to love the products that you buy from us. In case you
            have concerns related to your purchase, drop us a mail within 5 days
            of delivery with details at care@ayuvya.com
          </p>
        </div>
        <HeadingDescription
          heading="Cancellation, Refunds and Return"
          description="An order shall be considered confirmed unless you cancel the order within one day or before Ayuvya Ayurveda dispatches the products to you. In order to cancel your order or to change your order, prior to the order being dispatched, you will need to call our customer service number for the same. Please note that once the said order is dispatched to you, the said order can neither be canceled nor changed by you. The return policy is available only for Wrong and Damaged items Received In the case of returns, the product must be unopened and in the same condition as it was dispatched. We shall not be accepting returns of products that are consumed or once opened. If you receive a damaged product, the right product will be delivered to you within 5-6 Business Days or the refund will only be processed post we have received the damaged goods( 3-5 business days)."
        />
        <HeadingDescription
          heading="Shipping and Delivery"
          description="Ayuvya Ayurveda shall handle the logistics of the delivery of the products ordered by you. At the time of placing your order, depending on your place of residence, an estimated time of delivery( 3- 10 business days) would be shared with you along with the consignment number for tracking the status of your order. Please note that Ayuvya Ayurveda will try its level best to make sure that you receive your order as fast as possible but due to certain external circumstances, your order might take a while longer to get delivered. Ayuvya Ayurveda will take responsibility of your order, if the order has been shipped to any of the major cities (metros) where we use Best available Courier Partners based on their TAT and performance like Bluedart, Delhivery, Xpressbees, Ecom, Ekart, etc to ship your order."
        />
        <HeadingDescription
          heading="In case you received the wrong itemn"
          description="Drop us an email at care@ayuvya.com or call us at +919717133893 within 5 days of the date of delivery. Our Customer delight team will resolve it at the earliest."
        />
        <HeadingDescription
          heading="In case you received a damaged item"
          description="Drop us an email with your order id and the picture of the damaged product at care@ayuvya.com or call at +919717133893 within 5 days of the date of delivery. Our customer delight team will help you with your queries and resolve it at the earliest."
        />
        <HeadingDescription
          heading="In case you have concerns related to the product"
          description="Drop us an email at care@ayuvya.com or call at +919717133893 . Our customer delight team will help you with your queries and resolve it within 24 hours"
        />
        <div className="py-2">
          <h2 className="text-xl font-semibold">Order Cancellation</h2>
          <ul className="list-decimal ml-4 text-[17px]">
            <li>
              In case you need to cancel your order before it has been
              dispatched. You can cancel an order within 1 Day of placing the
              order. Your money will be refunded if its a prepaid order.
            </li>
            <li>
              In case you need to cancel your order after it has been
              dispatched. You can simply refuse to accept the parcel at the time
              of delivery as the order will not be returned once delivered.
            </li>
          </ul>
        </div>
        <HeadingDescription
          heading="In case your order is marked delivered but not received by youm"
          description="Drop us an email at care@ayuvya.com or call us at +919717133893 within 3 days (72 hours) of the date of delivery. Our Customer delight team will resolve it at the earliest."
        />
        <HeadingDescription
          heading="Shipping charges on purchaset"
          description="Shipping charges on purchase
          We offer FREE Shipping on all orders. We also offer Cash-On-Delivery at no additional charge. You should consider the shipping rates shown at the time of check-out to be final"
        />
      </div>
    </div>
  );
};

export default ShippingPolicy;
