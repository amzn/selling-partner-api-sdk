<?php
/**
 * CapacityReservationBillingEventTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\financesV0\CapacityReservationBillingEvent;

/**
 * CapacityReservationBillingEventTest Class Doc Comment
 *
 * @category    Class
 * @description An event related to a capacity reservation billing charge.
 * @package     OpenAPI\Client
 */
class CapacityReservationBillingEventTest extends TestCase
{

    private CapacityReservationBillingEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CapacityReservationBillingEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CapacityReservationBillingEvent"
     */
    public function testCapacityReservationBillingEvent()
    {
        $this->assertInstanceOf(CapacityReservationBillingEvent::class, $this->model);
    }

    /**
     * Test attribute "transaction_type"
     */
    public function testPropertyTransactionType()
    {
        $testValue = 'test';
        
        $this->model->setTransactionType($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionType());
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
     * Test attribute "description"
     */
    public function testPropertyDescription()
    {
        $testValue = 'test';
        
        $this->model->setDescription($testValue);
        $this->assertEquals($testValue, $this->model->getDescription());
    }

    /**
     * Test attribute "transaction_amount"
     */
    public function testPropertyTransactionAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\financesV0\Currency();
        
        $this->model->setTransactionAmount($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionAmount());
    }
}
