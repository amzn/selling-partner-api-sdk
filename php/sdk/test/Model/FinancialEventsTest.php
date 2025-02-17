<?php
/**
 * FinancialEventsTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\finances\v0\FinancialEvents;

/**
 * FinancialEventsTest Class Doc Comment
 *
 * @category    Class
 * @description Contains all information related to a financial event.
 * @package     SpApi
 */
class FinancialEventsTest extends TestCase
{

    private FinancialEvents $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FinancialEvents();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FinancialEvents"
     */
    public function testFinancialEvents()
    {
        $this->assertInstanceOf(FinancialEvents::class, $this->model);
    }

    /**
     * Test attribute "shipment_event_list"
     */
    public function testPropertyShipmentEventList()
    {
        $testValue = [];
        
        $this->model->setShipmentEventList($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentEventList());
    }

    /**
     * Test attribute "shipment_settle_event_list"
     */
    public function testPropertyShipmentSettleEventList()
    {
        $testValue = [];
        
        $this->model->setShipmentSettleEventList($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentSettleEventList());
    }

    /**
     * Test attribute "refund_event_list"
     */
    public function testPropertyRefundEventList()
    {
        $testValue = [];
        
        $this->model->setRefundEventList($testValue);
        $this->assertEquals($testValue, $this->model->getRefundEventList());
    }

    /**
     * Test attribute "guarantee_claim_event_list"
     */
    public function testPropertyGuaranteeClaimEventList()
    {
        $testValue = [];
        
        $this->model->setGuaranteeClaimEventList($testValue);
        $this->assertEquals($testValue, $this->model->getGuaranteeClaimEventList());
    }

    /**
     * Test attribute "chargeback_event_list"
     */
    public function testPropertyChargebackEventList()
    {
        $testValue = [];
        
        $this->model->setChargebackEventList($testValue);
        $this->assertEquals($testValue, $this->model->getChargebackEventList());
    }

    /**
     * Test attribute "pay_with_amazon_event_list"
     */
    public function testPropertyPayWithAmazonEventList()
    {
        $testValue = [];
        
        $this->model->setPayWithAmazonEventList($testValue);
        $this->assertEquals($testValue, $this->model->getPayWithAmazonEventList());
    }

    /**
     * Test attribute "service_provider_credit_event_list"
     */
    public function testPropertyServiceProviderCreditEventList()
    {
        $testValue = [];
        
        $this->model->setServiceProviderCreditEventList($testValue);
        $this->assertEquals($testValue, $this->model->getServiceProviderCreditEventList());
    }

    /**
     * Test attribute "retrocharge_event_list"
     */
    public function testPropertyRetrochargeEventList()
    {
        $testValue = [];
        
        $this->model->setRetrochargeEventList($testValue);
        $this->assertEquals($testValue, $this->model->getRetrochargeEventList());
    }

    /**
     * Test attribute "rental_transaction_event_list"
     */
    public function testPropertyRentalTransactionEventList()
    {
        $testValue = [];
        
        $this->model->setRentalTransactionEventList($testValue);
        $this->assertEquals($testValue, $this->model->getRentalTransactionEventList());
    }

    /**
     * Test attribute "product_ads_payment_event_list"
     */
    public function testPropertyProductAdsPaymentEventList()
    {
        $testValue = [];
        
        $this->model->setProductAdsPaymentEventList($testValue);
        $this->assertEquals($testValue, $this->model->getProductAdsPaymentEventList());
    }

    /**
     * Test attribute "service_fee_event_list"
     */
    public function testPropertyServiceFeeEventList()
    {
        $testValue = [];
        
        $this->model->setServiceFeeEventList($testValue);
        $this->assertEquals($testValue, $this->model->getServiceFeeEventList());
    }

    /**
     * Test attribute "seller_deal_payment_event_list"
     */
    public function testPropertySellerDealPaymentEventList()
    {
        $testValue = [];
        
        $this->model->setSellerDealPaymentEventList($testValue);
        $this->assertEquals($testValue, $this->model->getSellerDealPaymentEventList());
    }

    /**
     * Test attribute "debt_recovery_event_list"
     */
    public function testPropertyDebtRecoveryEventList()
    {
        $testValue = [];
        
        $this->model->setDebtRecoveryEventList($testValue);
        $this->assertEquals($testValue, $this->model->getDebtRecoveryEventList());
    }

    /**
     * Test attribute "loan_servicing_event_list"
     */
    public function testPropertyLoanServicingEventList()
    {
        $testValue = [];
        
        $this->model->setLoanServicingEventList($testValue);
        $this->assertEquals($testValue, $this->model->getLoanServicingEventList());
    }

    /**
     * Test attribute "adjustment_event_list"
     */
    public function testPropertyAdjustmentEventList()
    {
        $testValue = [];
        
        $this->model->setAdjustmentEventList($testValue);
        $this->assertEquals($testValue, $this->model->getAdjustmentEventList());
    }

    /**
     * Test attribute "safet_reimbursement_event_list"
     */
    public function testPropertySafetReimbursementEventList()
    {
        $testValue = [];
        
        $this->model->setSafetReimbursementEventList($testValue);
        $this->assertEquals($testValue, $this->model->getSafetReimbursementEventList());
    }

    /**
     * Test attribute "seller_review_enrollment_payment_event_list"
     */
    public function testPropertySellerReviewEnrollmentPaymentEventList()
    {
        $testValue = [];
        
        $this->model->setSellerReviewEnrollmentPaymentEventList($testValue);
        $this->assertEquals($testValue, $this->model->getSellerReviewEnrollmentPaymentEventList());
    }

    /**
     * Test attribute "fba_liquidation_event_list"
     */
    public function testPropertyFbaLiquidationEventList()
    {
        $testValue = [];
        
        $this->model->setFbaLiquidationEventList($testValue);
        $this->assertEquals($testValue, $this->model->getFbaLiquidationEventList());
    }

    /**
     * Test attribute "coupon_payment_event_list"
     */
    public function testPropertyCouponPaymentEventList()
    {
        $testValue = [];
        
        $this->model->setCouponPaymentEventList($testValue);
        $this->assertEquals($testValue, $this->model->getCouponPaymentEventList());
    }

    /**
     * Test attribute "imaging_services_fee_event_list"
     */
    public function testPropertyImagingServicesFeeEventList()
    {
        $testValue = [];
        
        $this->model->setImagingServicesFeeEventList($testValue);
        $this->assertEquals($testValue, $this->model->getImagingServicesFeeEventList());
    }

    /**
     * Test attribute "network_commingling_transaction_event_list"
     */
    public function testPropertyNetworkComminglingTransactionEventList()
    {
        $testValue = [];
        
        $this->model->setNetworkComminglingTransactionEventList($testValue);
        $this->assertEquals($testValue, $this->model->getNetworkComminglingTransactionEventList());
    }

    /**
     * Test attribute "affordability_expense_event_list"
     */
    public function testPropertyAffordabilityExpenseEventList()
    {
        $testValue = [];
        
        $this->model->setAffordabilityExpenseEventList($testValue);
        $this->assertEquals($testValue, $this->model->getAffordabilityExpenseEventList());
    }

    /**
     * Test attribute "affordability_expense_reversal_event_list"
     */
    public function testPropertyAffordabilityExpenseReversalEventList()
    {
        $testValue = [];
        
        $this->model->setAffordabilityExpenseReversalEventList($testValue);
        $this->assertEquals($testValue, $this->model->getAffordabilityExpenseReversalEventList());
    }

    /**
     * Test attribute "removal_shipment_event_list"
     */
    public function testPropertyRemovalShipmentEventList()
    {
        $testValue = [];
        
        $this->model->setRemovalShipmentEventList($testValue);
        $this->assertEquals($testValue, $this->model->getRemovalShipmentEventList());
    }

    /**
     * Test attribute "removal_shipment_adjustment_event_list"
     */
    public function testPropertyRemovalShipmentAdjustmentEventList()
    {
        $testValue = [];
        
        $this->model->setRemovalShipmentAdjustmentEventList($testValue);
        $this->assertEquals($testValue, $this->model->getRemovalShipmentAdjustmentEventList());
    }

    /**
     * Test attribute "trial_shipment_event_list"
     */
    public function testPropertyTrialShipmentEventList()
    {
        $testValue = [];
        
        $this->model->setTrialShipmentEventList($testValue);
        $this->assertEquals($testValue, $this->model->getTrialShipmentEventList());
    }

    /**
     * Test attribute "tds_reimbursement_event_list"
     */
    public function testPropertyTdsReimbursementEventList()
    {
        $testValue = [];
        
        $this->model->setTdsReimbursementEventList($testValue);
        $this->assertEquals($testValue, $this->model->getTdsReimbursementEventList());
    }

    /**
     * Test attribute "adhoc_disbursement_event_list"
     */
    public function testPropertyAdhocDisbursementEventList()
    {
        $testValue = [];
        
        $this->model->setAdhocDisbursementEventList($testValue);
        $this->assertEquals($testValue, $this->model->getAdhocDisbursementEventList());
    }

    /**
     * Test attribute "tax_withholding_event_list"
     */
    public function testPropertyTaxWithholdingEventList()
    {
        $testValue = [];
        
        $this->model->setTaxWithholdingEventList($testValue);
        $this->assertEquals($testValue, $this->model->getTaxWithholdingEventList());
    }

    /**
     * Test attribute "charge_refund_event_list"
     */
    public function testPropertyChargeRefundEventList()
    {
        $testValue = [];
        
        $this->model->setChargeRefundEventList($testValue);
        $this->assertEquals($testValue, $this->model->getChargeRefundEventList());
    }

    /**
     * Test attribute "failed_adhoc_disbursement_event_list"
     */
    public function testPropertyFailedAdhocDisbursementEventList()
    {
        $testValue = [];
        
        $this->model->setFailedAdhocDisbursementEventList($testValue);
        $this->assertEquals($testValue, $this->model->getFailedAdhocDisbursementEventList());
    }

    /**
     * Test attribute "value_added_service_charge_event_list"
     */
    public function testPropertyValueAddedServiceChargeEventList()
    {
        $testValue = [];
        
        $this->model->setValueAddedServiceChargeEventList($testValue);
        $this->assertEquals($testValue, $this->model->getValueAddedServiceChargeEventList());
    }

    /**
     * Test attribute "capacity_reservation_billing_event_list"
     */
    public function testPropertyCapacityReservationBillingEventList()
    {
        $testValue = [];
        
        $this->model->setCapacityReservationBillingEventList($testValue);
        $this->assertEquals($testValue, $this->model->getCapacityReservationBillingEventList());
    }
}
