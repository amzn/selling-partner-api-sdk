<?php
/**
 * DirectPurchaseResultTest
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
use OpenAPI\Client\Model\shipping\v2\DirectPurchaseResult;

/**
 * DirectPurchaseResultTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the directPurchaseShipment operation.
 * @package     OpenAPI\Client
 */
class DirectPurchaseResultTest extends TestCase
{

    private DirectPurchaseResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DirectPurchaseResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DirectPurchaseResult"
     */
    public function testDirectPurchaseResult()
    {
        $this->assertInstanceOf(DirectPurchaseResult::class, $this->model);
    }

    /**
     * Test attribute "shipment_id"
     */
    public function testPropertyShipmentId()
    {
        $testValue = 'test';
        
        $this->model->setShipmentId($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentId());
    }

    /**
     * Test attribute "package_document_detail_list"
     */
    public function testPropertyPackageDocumentDetailList()
    {
        $testValue = [];
        
        $this->model->setPackageDocumentDetailList($testValue);
        $this->assertEquals($testValue, $this->model->getPackageDocumentDetailList());
    }
}
