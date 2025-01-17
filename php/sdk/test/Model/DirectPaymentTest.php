<?php
/**
 * DirectPaymentTest
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
use OpenAPI\Client\Model\finances\v0\DirectPayment;

/**
 * DirectPaymentTest Class Doc Comment
 *
 * @category    Class
 * @description A payment made directly to a seller.
 * @package     OpenAPI\Client
 */
class DirectPaymentTest extends TestCase
{

    private DirectPayment $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DirectPayment();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DirectPayment"
     */
    public function testDirectPayment()
    {
        $this->assertInstanceOf(DirectPayment::class, $this->model);
    }

    /**
     * Test attribute "direct_payment_type"
     */
    public function testPropertyDirectPaymentType()
    {
        $testValue = 'test';
        
        $this->model->setDirectPaymentType($testValue);
        $this->assertEquals($testValue, $this->model->getDirectPaymentType());
    }

    /**
     * Test attribute "direct_payment_amount"
     */
    public function testPropertyDirectPaymentAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\finances\v0\Currency();
        
        $this->model->setDirectPaymentAmount($testValue);
        $this->assertEquals($testValue, $this->model->getDirectPaymentAmount());
    }
}
