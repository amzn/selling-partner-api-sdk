<?php
/**
 * CreateFulfillmentReturnResultTest
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
use OpenAPI\Client\Model\fulfillment\outbound\CreateFulfillmentReturnResult;

/**
 * CreateFulfillmentReturnResultTest Class Doc Comment
 *
 * @category    Class
 * @description The result for the createFulfillmentReturn operation.
 * @package     OpenAPI\Client
 */
class CreateFulfillmentReturnResultTest extends TestCase
{

    private CreateFulfillmentReturnResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateFulfillmentReturnResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateFulfillmentReturnResult"
     */
    public function testCreateFulfillmentReturnResult()
    {
        $this->assertInstanceOf(CreateFulfillmentReturnResult::class, $this->model);
    }

    /**
     * Test attribute "return_items"
     */
    public function testPropertyReturnItems()
    {
        $testValue = [];
        
        $this->model->setReturnItems($testValue);
        $this->assertEquals($testValue, $this->model->getReturnItems());
    }

    /**
     * Test attribute "invalid_return_items"
     */
    public function testPropertyInvalidReturnItems()
    {
        $testValue = [];
        
        $this->model->setInvalidReturnItems($testValue);
        $this->assertEquals($testValue, $this->model->getInvalidReturnItems());
    }

    /**
     * Test attribute "return_authorizations"
     */
    public function testPropertyReturnAuthorizations()
    {
        $testValue = [];
        
        $this->model->setReturnAuthorizations($testValue);
        $this->assertEquals($testValue, $this->model->getReturnAuthorizations());
    }
}
