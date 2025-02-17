<?php
/**
 * CreateFulfillmentReturnRequestTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\CreateFulfillmentReturnRequest;

/**
 * CreateFulfillmentReturnRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;createFulfillmentReturn&#x60; operation creates a fulfillment return for items that were fulfilled using the &#x60;createFulfillmentOrder&#x60; operation. For calls to &#x60;createFulfillmentReturn&#x60;, you must include &#x60;ReturnReasonCode&#x60; values returned by a previous call to the &#x60;listReturnReasonCodes&#x60; operation.
 * @package     SpApi
 */
class CreateFulfillmentReturnRequestTest extends TestCase
{

    private CreateFulfillmentReturnRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateFulfillmentReturnRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateFulfillmentReturnRequest"
     */
    public function testCreateFulfillmentReturnRequest()
    {
        $this->assertInstanceOf(CreateFulfillmentReturnRequest::class, $this->model);
    }

    /**
     * Test attribute "items"
     */
    public function testPropertyItems()
    {
        $testValue = [];
        
        $this->model->setItems($testValue);
        $this->assertEquals($testValue, $this->model->getItems());
    }
}
