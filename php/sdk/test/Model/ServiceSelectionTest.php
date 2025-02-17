<?php
/**
 * ServiceSelectionTest
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
use SpApi\Model\shipping\v2\ServiceSelection;

/**
 * ServiceSelectionTest Class Doc Comment
 *
 * @category    Class
 * @description Service Selection Criteria.
 * @package     SpApi
 */
class ServiceSelectionTest extends TestCase
{

    private ServiceSelection $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ServiceSelection();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ServiceSelection"
     */
    public function testServiceSelection()
    {
        $this->assertInstanceOf(ServiceSelection::class, $this->model);
    }

    /**
     * Test attribute "service_id"
     */
    public function testPropertyServiceId()
    {
        $testValue = [];
        
        $this->model->setServiceId($testValue);
        $this->assertEquals($testValue, $this->model->getServiceId());
    }
}
