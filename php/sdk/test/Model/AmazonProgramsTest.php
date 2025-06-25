<?php
/**
 * AmazonProgramsTest
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
use SpApi\Model\orders\v0\AmazonPrograms;

/**
 * AmazonProgramsTest Class Doc Comment
 *
 * @category    Class
 * @description Contains the list of programs that Amazon associates with an item.  Possible programs are:  - **Subscribe and Save**: Offers recurring, scheduled deliveries to Amazon customers and Amazon Business customers for their frequently ordered products. - **FBM Ship+**: Unlocks expedited shipping without the extra cost. Helps you to provide accurate and fast delivery dates to Amazon customers. You also receive protection from late deliveries, a discount on expedited shipping rates, and cash back when you ship.
 * @package     SpApi
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
