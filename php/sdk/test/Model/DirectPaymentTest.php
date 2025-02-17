<?php
/**
 * DirectPaymentTest
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
use SpApi\Model\finances\v0\DirectPayment;

/**
 * DirectPaymentTest Class Doc Comment
 *
 * @category    Class
 * @description A payment made directly to a seller.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setDirectPaymentAmount($testValue);
        $this->assertEquals($testValue, $this->model->getDirectPaymentAmount());
    }
}
