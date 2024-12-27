<?php
/**
 * AplusResponseTest
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
use OpenAPI\Client\Model\apluscontent\AplusResponse;

/**
 * AplusResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The base response data for all A+ Content operations when a request is successful or partially successful. Individual operations may extend this with additional data.
 * @package     OpenAPI\Client
 */
class AplusResponseTest extends TestCase
{

    private AplusResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AplusResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AplusResponse"
     */
    public function testAplusResponse()
    {
        $this->assertInstanceOf(AplusResponse::class, $this->model);
    }

    /**
     * Test attribute "warnings"
     */
    public function testPropertyWarnings()
    {
        $testValue = [];
        
        $this->model->setWarnings($testValue);
        $this->assertEquals($testValue, $this->model->getWarnings());
    }
}
