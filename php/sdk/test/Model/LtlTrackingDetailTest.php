<?php
/**
 * LtlTrackingDetailTest
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
use OpenAPI\Client\Model\fulfillmentInbound\LtlTrackingDetail;

/**
 * LtlTrackingDetailTest Class Doc Comment
 *
 * @category    Class
 * @description Contains information related to Less-Than-Truckload (LTL) shipment tracking.
 * @package     OpenAPI\Client
 */
class LtlTrackingDetailTest extends TestCase
{

    private LtlTrackingDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LtlTrackingDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LtlTrackingDetail"
     */
    public function testLtlTrackingDetail()
    {
        $this->assertInstanceOf(LtlTrackingDetail::class, $this->model);
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
