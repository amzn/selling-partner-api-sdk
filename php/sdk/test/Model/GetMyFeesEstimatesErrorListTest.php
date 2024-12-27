<?php
/**
 * GetMyFeesEstimatesErrorListTest
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
use OpenAPI\Client\Model\productfees\GetMyFeesEstimatesErrorList;

/**
 * GetMyFeesEstimatesErrorListTest Class Doc Comment
 *
 * @category    Class
 * @description A list of error responses returned when a request is unsuccessful.
 * @package     OpenAPI\Client
 */
class GetMyFeesEstimatesErrorListTest extends TestCase
{

    private GetMyFeesEstimatesErrorList $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetMyFeesEstimatesErrorList();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetMyFeesEstimatesErrorList"
     */
    public function testGetMyFeesEstimatesErrorList()
    {
        $this->assertInstanceOf(GetMyFeesEstimatesErrorList::class, $this->model);
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
