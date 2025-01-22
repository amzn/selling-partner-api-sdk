<?php
/**
 * AmazonProgramsTest
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
use OpenAPI\Client\Model\orders\AmazonPrograms;

/**
 * AmazonProgramsTest Class Doc Comment
 *
 * @category    Class
 * @description Contains the list of programs that are associated with an item.  Possible programs are:  - **Subscribe and Save**: Offers recurring, scheduled deliveries to Amazon customers and Amazon Business customers for their frequently ordered products.
 * @package     OpenAPI\Client
 */
class AmazonProgramsTest extends TestCase
{

    private AmazonPrograms $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AmazonPrograms();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AmazonPrograms"
     */
    public function testAmazonPrograms()
    {
        $this->assertInstanceOf(AmazonPrograms::class, $this->model);
    }

    /**
     * Test attribute "programs"
     */
    public function testPropertyPrograms()
    {
        $testValue = [];
        
        $this->model->setPrograms($testValue);
        $this->assertEquals($testValue, $this->model->getPrograms());
    }
}
