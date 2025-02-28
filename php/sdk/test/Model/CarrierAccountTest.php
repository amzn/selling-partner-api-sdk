<?php
/**
 * CarrierAccountTest
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
use SpApi\Model\shipping\v2\CarrierAccount;

/**
 * CarrierAccountTest Class Doc Comment
 *
 * @category    Class
 * @description Carrier Account details used to fetch rates.
 * @package     SpApi
 */
class CarrierAccountTest extends TestCase
{

    private CarrierAccount $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CarrierAccount();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CarrierAccount"
     */
    public function testCarrierAccount()
    {
        $this->assertInstanceOf(CarrierAccount::class, $this->model);
    }

    /**
     * Test attribute "carrier_account_id"
     */
    public function testPropertyCarrierAccountId()
    {
        $testValue = 'test';
        
        $this->model->setCarrierAccountId($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierAccountId());
    }

    /**
     * Test attribute "carrier_id"
     */
    public function testPropertyCarrierId()
    {
        $testValue = 'test';
        
        $this->model->setCarrierId($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierId());
    }
}
