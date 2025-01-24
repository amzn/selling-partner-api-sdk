<?php
/**
 * SellerReviewEnrollmentPaymentEventTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\finances\v0\SellerReviewEnrollmentPaymentEvent;

/**
 * SellerReviewEnrollmentPaymentEventTest Class Doc Comment
 *
 * @category    Class
 * @description A fee payment event for the Early Reviewer Program.
 * @package     OpenAPI\Client
 */
class SellerReviewEnrollmentPaymentEventTest extends TestCase
{

    private SellerReviewEnrollmentPaymentEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SellerReviewEnrollmentPaymentEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SellerReviewEnrollmentPaymentEvent"
     */
    public function testSellerReviewEnrollmentPaymentEvent()
    {
        $this->assertInstanceOf(SellerReviewEnrollmentPaymentEvent::class, $this->model);
    }

    /**
     * Test attribute "posted_date"
     */
    public function testPropertyPostedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPostedDate($testValue);
        $this->assertEquals($testValue, $this->model->getPostedDate());
    }

    /**
     * Test attribute "enrollment_id"
     */
    public function testPropertyEnrollmentId()
    {
        $testValue = 'test';
        
        $this->model->setEnrollmentId($testValue);
        $this->assertEquals($testValue, $this->model->getEnrollmentId());
    }

    /**
     * Test attribute "parent_asin"
     */
    public function testPropertyParentAsin()
    {
        $testValue = 'test';
        
        $this->model->setParentAsin($testValue);
        $this->assertEquals($testValue, $this->model->getParentAsin());
    }

    /**
     * Test attribute "fee_component"
     */
    public function testPropertyFeeComponent()
    {
        
        $testValue = new \OpenAPI\Client\Model\finances\v0\FeeComponent();
        
        $this->model->setFeeComponent($testValue);
        $this->assertEquals($testValue, $this->model->getFeeComponent());
    }

    /**
     * Test attribute "charge_component"
     */
    public function testPropertyChargeComponent()
    {
        
        $testValue = new \OpenAPI\Client\Model\finances\v0\ChargeComponent();
        
        $this->model->setChargeComponent($testValue);
        $this->assertEquals($testValue, $this->model->getChargeComponent());
    }

    /**
     * Test attribute "total_amount"
     */
    public function testPropertyTotalAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\finances\v0\Currency();
        
        $this->model->setTotalAmount($testValue);
        $this->assertEquals($testValue, $this->model->getTotalAmount());
    }
}
