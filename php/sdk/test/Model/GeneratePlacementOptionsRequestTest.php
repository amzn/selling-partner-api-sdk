<?php
/**
 * GeneratePlacementOptionsRequestTest
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
use OpenAPI\Client\Model\fulfillmentinbound\GeneratePlacementOptionsRequest;

/**
 * GeneratePlacementOptionsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;generatePlacementOptions&#x60; request.
 * @package     OpenAPI\Client
 */
class GeneratePlacementOptionsRequestTest extends TestCase
{

    private GeneratePlacementOptionsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GeneratePlacementOptionsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GeneratePlacementOptionsRequest"
     */
    public function testGeneratePlacementOptionsRequest()
    {
        $this->assertInstanceOf(GeneratePlacementOptionsRequest::class, $this->model);
    }

    /**
     * Test attribute "custom_placement"
     */
    public function testPropertyCustomPlacement()
    {
        $testValue = [];
        
        $this->model->setCustomPlacement($testValue);
        $this->assertEquals($testValue, $this->model->getCustomPlacement());
    }
}
