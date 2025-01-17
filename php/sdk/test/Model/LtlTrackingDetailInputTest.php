<?php
/**
 * LtlTrackingDetailInputTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\LtlTrackingDetailInput;

/**
 * LtlTrackingDetailInputTest Class Doc Comment
 *
 * @category    Class
 * @description Contains input information to update Less-Than-Truckload (LTL) tracking information.
 * @package     OpenAPI\Client
 */
class LtlTrackingDetailInputTest extends TestCase
{

    private LtlTrackingDetailInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LtlTrackingDetailInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LtlTrackingDetailInput"
     */
    public function testLtlTrackingDetailInput()
    {
        $this->assertInstanceOf(LtlTrackingDetailInput::class, $this->model);
    }

    /**
     * Test attribute "bill_of_lading_number"
     */
    public function testPropertyBillOfLadingNumber()
    {
        $testValue = 'test';
        
        $this->model->setBillOfLadingNumber($testValue);
        $this->assertEquals($testValue, $this->model->getBillOfLadingNumber());
    }

    /**
     * Test attribute "freight_bill_number"
     */
    public function testPropertyFreightBillNumber()
    {
        $testValue = [];
        
        $this->model->setFreightBillNumber($testValue);
        $this->assertEquals($testValue, $this->model->getFreightBillNumber());
    }
}
