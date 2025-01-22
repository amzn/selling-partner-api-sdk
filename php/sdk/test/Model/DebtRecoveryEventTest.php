<?php
/**
 * DebtRecoveryEventTest
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
use OpenAPI\Client\Model\finances\v0\DebtRecoveryEvent;

/**
 * DebtRecoveryEventTest Class Doc Comment
 *
 * @category    Class
 * @description A debt payment or debt adjustment.
 * @package     OpenAPI\Client
 */
class DebtRecoveryEventTest extends TestCase
{

    private DebtRecoveryEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DebtRecoveryEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DebtRecoveryEvent"
     */
    public function testDebtRecoveryEvent()
    {
        $this->assertInstanceOf(DebtRecoveryEvent::class, $this->model);
    }

    /**
     * Test attribute "debt_recovery_type"
     */
    public function testPropertyDebtRecoveryType()
    {
        $testValue = 'test';
        
        $this->model->setDebtRecoveryType($testValue);
        $this->assertEquals($testValue, $this->model->getDebtRecoveryType());
    }

    /**
     * Test attribute "recovery_amount"
     */
    public function testPropertyRecoveryAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\finances\v0\Currency();
        
        $this->model->setRecoveryAmount($testValue);
        $this->assertEquals($testValue, $this->model->getRecoveryAmount());
    }

    /**
     * Test attribute "over_payment_credit"
     */
    public function testPropertyOverPaymentCredit()
    {
        
        $testValue = new \OpenAPI\Client\Model\finances\v0\Currency();
        
        $this->model->setOverPaymentCredit($testValue);
        $this->assertEquals($testValue, $this->model->getOverPaymentCredit());
    }

    /**
     * Test attribute "debt_recovery_item_list"
     */
    public function testPropertyDebtRecoveryItemList()
    {
        $testValue = [];
        
        $this->model->setDebtRecoveryItemList($testValue);
        $this->assertEquals($testValue, $this->model->getDebtRecoveryItemList());
    }

    /**
     * Test attribute "charge_instrument_list"
     */
    public function testPropertyChargeInstrumentList()
    {
        $testValue = [];
        
        $this->model->setChargeInstrumentList($testValue);
        $this->assertEquals($testValue, $this->model->getChargeInstrumentList());
    }
}
