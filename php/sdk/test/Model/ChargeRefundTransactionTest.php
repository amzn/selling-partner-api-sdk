<?php
/**
 * ChargeRefundTransactionTest
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
use OpenAPI\Client\Model\finances\v0\ChargeRefundTransaction;

/**
 * ChargeRefundTransactionTest Class Doc Comment
 *
 * @category    Class
 * @description The charge refund transaction.
 * @package     OpenAPI\Client
 */
class ChargeRefundTransactionTest extends TestCase
{

    private ChargeRefundTransaction $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ChargeRefundTransaction();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ChargeRefundTransaction"
     */
    public function testChargeRefundTransaction()
    {
        $this->assertInstanceOf(ChargeRefundTransaction::class, $this->model);
    }

    /**
     * Test attribute "charge_amount"
     */
    public function testPropertyChargeAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\finances\v0\Currency();
        
        $this->model->setChargeAmount($testValue);
        $this->assertEquals($testValue, $this->model->getChargeAmount());
    }

    /**
     * Test attribute "charge_type"
     */
    public function testPropertyChargeType()
    {
        $testValue = 'test';
        
        $this->model->setChargeType($testValue);
        $this->assertEquals($testValue, $this->model->getChargeType());
    }
}
