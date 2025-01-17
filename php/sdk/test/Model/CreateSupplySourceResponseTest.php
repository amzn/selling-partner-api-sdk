<?php
/**
 * CreateSupplySourceResponseTest
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
use OpenAPI\Client\Model\supplySources\CreateSupplySourceResponse;

/**
 * CreateSupplySourceResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The result of creating a new supply source.
 * @package     OpenAPI\Client
 */
class CreateSupplySourceResponseTest extends TestCase
{

    private CreateSupplySourceResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateSupplySourceResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateSupplySourceResponse"
     */
    public function testCreateSupplySourceResponse()
    {
        $this->assertInstanceOf(CreateSupplySourceResponse::class, $this->model);
    }

    /**
     * Test attribute "supply_source_id"
     */
    public function testPropertySupplySourceId()
    {
        $testValue = 'test';
        
        $this->model->setSupplySourceId($testValue);
        $this->assertEquals($testValue, $this->model->getSupplySourceId());
    }

    /**
     * Test attribute "supply_source_code"
     */
    public function testPropertySupplySourceCode()
    {
        $testValue = 'test';
        
        $this->model->setSupplySourceCode($testValue);
        $this->assertEquals($testValue, $this->model->getSupplySourceCode());
    }
}
