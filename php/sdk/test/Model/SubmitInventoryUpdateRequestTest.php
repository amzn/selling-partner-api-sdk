<?php
/**
 * SubmitInventoryUpdateRequestTest
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
use SpApi\Model\vendor\df\inventory\v1\SubmitInventoryUpdateRequest;

/**
 * SubmitInventoryUpdateRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body for the submitInventoryUpdate operation.
 * @package     SpApi
 */
class SubmitInventoryUpdateRequestTest extends TestCase
{

    private SubmitInventoryUpdateRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitInventoryUpdateRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitInventoryUpdateRequest"
     */
    public function testSubmitInventoryUpdateRequest()
    {
        $this->assertInstanceOf(SubmitInventoryUpdateRequest::class, $this->model);
    }

    /**
     * Test attribute "inventory"
     */
    public function testPropertyInventory()
    {
        
        $testValue = new \SpApi\Model\vendor\df\inventory\v1\InventoryUpdate();
        
        $this->model->setInventory($testValue);
        $this->assertEquals($testValue, $this->model->getInventory());
    }
}
