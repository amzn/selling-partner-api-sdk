<?php
/**
 * GetSchemaResponseLinksTest
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
use OpenAPI\Client\Model\messaging\GetSchemaResponseLinks;

/**
 * GetSchemaResponseLinksTest Class Doc Comment
 *
 * @category    Class
 * @description GetSchemaResponseLinks
 * @package     OpenAPI\Client
 */
class GetSchemaResponseLinksTest extends TestCase
{

    private GetSchemaResponseLinks $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetSchemaResponseLinks();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetSchemaResponseLinks"
     */
    public function testGetSchemaResponseLinks()
    {
        $this->assertInstanceOf(GetSchemaResponseLinks::class, $this->model);
    }

    /**
     * Test attribute "self"
     */
    public function testPropertySelf()
    {
        
        $testValue = new \OpenAPI\Client\Model\messaging\LinkObject();
        
        $this->model->setSelf($testValue);
        $this->assertEquals($testValue, $this->model->getSelf());
    }
}
