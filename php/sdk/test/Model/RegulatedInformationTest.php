<?php
/**
 * RegulatedInformationTest
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
use OpenAPI\Client\Model\orders\RegulatedInformation;

/**
 * RegulatedInformationTest Class Doc Comment
 *
 * @category    Class
 * @description The regulated information collected during purchase and used to verify the order.
 * @package     OpenAPI\Client
 */
class RegulatedInformationTest extends TestCase
{

    private RegulatedInformation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RegulatedInformation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RegulatedInformation"
     */
    public function testRegulatedInformation()
    {
        $this->assertInstanceOf(RegulatedInformation::class, $this->model);
    }

    /**
     * Test attribute "fields"
     */
    public function testPropertyFields()
    {
        $testValue = [];
        
        $this->model->setFields($testValue);
        $this->assertEquals($testValue, $this->model->getFields());
    }
}
