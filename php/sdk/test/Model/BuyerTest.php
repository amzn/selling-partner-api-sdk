<?php
/**
 * BuyerTest
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
use SpApi\Model\services\v1\Buyer;

/**
 * BuyerTest Class Doc Comment
 *
 * @category    Class
 * @description Information about the buyer.
 * @package     SpApi
 */
class BuyerTest extends TestCase
{

    private Buyer $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Buyer();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Buyer"
     */
    public function testBuyer()
    {
        $this->assertInstanceOf(Buyer::class, $this->model);
    }

    /**
     * Test attribute "buyer_id"
     */
    public function testPropertyBuyerId()
    {
        $testValue = 'test';
        
        $this->model->setBuyerId($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerId());
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }

    /**
     * Test attribute "phone"
     */
    public function testPropertyPhone()
    {
        $testValue = 'test';
        
        $this->model->setPhone($testValue);
        $this->assertEquals($testValue, $this->model->getPhone());
    }

    /**
     * Test attribute "is_prime_member"
     */
    public function testPropertyIsPrimeMember()
    {
        $testValue = true;
        
        $this->model->setIsPrimeMember($testValue);
        $this->assertEquals($testValue, $this->model->getIsPrimeMember());
    }
}
