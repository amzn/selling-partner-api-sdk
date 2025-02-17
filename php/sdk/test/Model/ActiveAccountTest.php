<?php
/**
 * ActiveAccountTest
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
use SpApi\Model\shipping\v2\ActiveAccount;

/**
 * ActiveAccountTest Class Doc Comment
 *
 * @category    Class
 * @description Active Account Details
 * @package     SpApi
 */
class ActiveAccountTest extends TestCase
{

    private ActiveAccount $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ActiveAccount();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ActiveAccount"
     */
    public function testActiveAccount()
    {
        $this->assertInstanceOf(ActiveAccount::class, $this->model);
    }

    /**
     * Test attribute "account_id"
     */
    public function testPropertyAccountId()
    {
        $testValue = 'test';
        
        $this->model->setAccountId($testValue);
        $this->assertEquals($testValue, $this->model->getAccountId());
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
