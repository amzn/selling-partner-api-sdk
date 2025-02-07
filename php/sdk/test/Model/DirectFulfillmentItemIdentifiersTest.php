<?php
/**
 * DirectFulfillmentItemIdentifiersTest
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
use OpenAPI\Client\Model\shipping\v2\DirectFulfillmentItemIdentifiers;

/**
 * DirectFulfillmentItemIdentifiersTest Class Doc Comment
 *
 * @category    Class
 * @description Item identifiers for an item in a direct fulfillment shipment.
 * @package     OpenAPI\Client
 */
class DirectFulfillmentItemIdentifiersTest extends TestCase
{

    private DirectFulfillmentItemIdentifiers $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DirectFulfillmentItemIdentifiers();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DirectFulfillmentItemIdentifiers"
     */
    public function testDirectFulfillmentItemIdentifiers()
    {
        $this->assertInstanceOf(DirectFulfillmentItemIdentifiers::class, $this->model);
    }

    /**
     * Test attribute "line_item_id"
     */
    public function testPropertyLineItemId()
    {
        $testValue = 'test';
        
        $this->model->setLineItemId($testValue);
        $this->assertEquals($testValue, $this->model->getLineItemId());
    }

    /**
     * Test attribute "piece_number"
     */
    public function testPropertyPieceNumber()
    {
        $testValue = 'test';
        
        $this->model->setPieceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPieceNumber());
    }
}
