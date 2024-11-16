import React from "react";
import { Button, message, Modal } from "antd";
import { useStripe, useElements, PaymentElement, AddressElement } from "@stripe/react-stripe-js";

interface CreditCardFromProps {
  showCreditCardForm: boolean;
  setShowCreditCardForm: (value: boolean) => void;
  onPaymentSuccess: (paymentId : string) => void;
}

function CreditCardFrom({
  showCreditCardForm,
  setShowCreditCardForm,
  onPaymentSuccess,
}: CreditCardFromProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true);
      event.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "https://example.com/order/123/complete",
        },
        redirect: "if_required",
      });

      if (result.error) {
        message.error(result.error.message);
      } else {
        message.success("Payment successful");
        onPaymentSuccess(result.paymentIntent.id);
      }
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={showCreditCardForm}
      title="Enter your card details"
      onCancel={() => setShowCreditCardForm(false)}
      centered
      footer={null}
    >
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <AddressElement
          options={{
            // allowedCountries: ["US", "UK", "GB"],
            mode: "billing",
          }}
        />

        <div className="flex gap-5 justify-end mt-5">
          <Button
            onClick={() => setShowCreditCardForm(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button htmlType="submit" type="primary" loading={loading}>
            Pay
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default CreditCardFrom;