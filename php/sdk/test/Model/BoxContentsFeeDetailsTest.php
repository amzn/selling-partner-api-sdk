<?php
/**
 * BoxContentsFeeDetailsTest
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
use SpApi\Model\fulfillment\inbound\v0\BoxContentsFeeDetails;

/**
 * BoxContentsFeeDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description The manual processing fee per unit and total fee for a shipment.
 * @package     SpApi
 */
class BoxContentsFeeDetailsTest extends TestCase
{

    private BoxContentsFeeDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BoxContentsFeeDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BoxContentsFeeDetails"
     */
    public function testBoxContentsFeeDetails()
    {
        $this->assertInstanceOf(BoxContentsFeeDetails::class, $this->model);
    }

    /**
     * Test attribute "total_units"
     */
    public function testPropertyTotalUnits()
    {
        $testValue = 123;
        
        $this->model->setTotalUnits($testValue);
        $this->assertEquals($testValue, $this->model->getTotalUnits());
    }

    /**
     * Test attribute "fee_per_unit"
     */
    public function testPropertyFeePerUnit()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v0\Amount();
        
        $this->model->setFeePerUnit($testValue);
        $this->assertEquals($testValue, $this->model->getFeePerUnit());
    }

    /**
     * Test attribute "total_fee"
     */
    public function testPropertyTotalFee()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v0\Amount();
        
        $this->model->setTotalFee($testValue);
        $this->assertEquals($testValue, $this->model->getTotalFee());
    }
}
