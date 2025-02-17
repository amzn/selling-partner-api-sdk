<?php
/**
 * ListItemComplianceDetailsResponseTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\ListItemComplianceDetailsResponse;

/**
 * ListItemComplianceDetailsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;listItemComplianceDetails&#x60; response.
 * @package     SpApi
 */
class ListItemComplianceDetailsResponseTest extends TestCase
{

    private ListItemComplianceDetailsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListItemComplianceDetailsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListItemComplianceDetailsResponse"
     */
    public function testListItemComplianceDetailsResponse()
    {
        $this->assertInstanceOf(ListItemComplianceDetailsResponse::class, $this->model);
    }

    /**
     * Test attribute "compliance_details"
     */
    public function testPropertyComplianceDetails()
    {
        $testValue = [];
        
        $this->model->setComplianceDetails($testValue);
        $this->assertEquals($testValue, $this->model->getComplianceDetails());
    }
}
