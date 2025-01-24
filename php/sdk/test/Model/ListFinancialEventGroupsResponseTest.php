<?php
/**
 * ListFinancialEventGroupsResponseTest
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
use OpenAPI\Client\Model\finances\v0\ListFinancialEventGroupsResponse;

/**
 * ListFinancialEventGroupsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the listFinancialEventGroups operation.
 * @package     OpenAPI\Client
 */
class ListFinancialEventGroupsResponseTest extends TestCase
{

    private ListFinancialEventGroupsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListFinancialEventGroupsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListFinancialEventGroupsResponse"
     */
    public function testListFinancialEventGroupsResponse()
    {
        $this->assertInstanceOf(ListFinancialEventGroupsResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\finances\v0\ListFinancialEventGroupsPayload();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
