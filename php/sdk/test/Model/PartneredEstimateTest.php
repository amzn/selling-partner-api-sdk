<?php
/**
 * PartneredEstimateTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\PartneredEstimate;

/**
 * PartneredEstimateTest Class Doc Comment
 *
 * @category    Class
 * @description The estimated shipping cost for a shipment using an Amazon-partnered carrier.
 * @package     OpenAPI\Client
 */
class PartneredEstimateTest extends TestCase
{

    private PartneredEstimate $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PartneredEstimate();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PartneredEstimate"
     */
    public function testPartneredEstimate()
    {
        $this->assertInstanceOf(PartneredEstimate::class, $this->model);
    }

    /**
     * Test attribute "amount"
     */
    public function testPropertyAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\Amount();
        
        $this->model->setAmount($testValue);
        $this->assertEquals($testValue, $this->model->getAmount());
    }

    /**
     * Test attribute "confirm_deadline"
     */
    public function testPropertyConfirmDeadline()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setConfirmDeadline($testValue);
        $this->assertEquals($testValue, $this->model->getConfirmDeadline());
    }

    /**
     * Test attribute "void_deadline"
     */
    public function testPropertyVoidDeadline()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setVoidDeadline($testValue);
        $this->assertEquals($testValue, $this->model->getVoidDeadline());
    }
}
